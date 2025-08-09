// The Sneaker Database API service
const BASE_URL = "https://api.thesneakerdatabase.com/v2";

// Rate limiting: 5 requests per second
class RateLimiter {
    private requestTimes: number[] = [];
    private readonly maxRequests = 5;
    private readonly timeWindow = 1000; // 1 second

    async waitForAvailableSlot(): Promise<void> {
        const now = Date.now();

        // Remove requests older than the time window
        this.requestTimes = this.requestTimes.filter(
            (time) => now - time < this.timeWindow,
        );

        if (this.requestTimes.length >= this.maxRequests) {
            // Wait for the oldest request to expire
            const oldestRequest = Math.min(...this.requestTimes);
            const waitTime = this.timeWindow - (now - oldestRequest) + 100; // Add 100ms buffer

            await new Promise((resolve) => setTimeout(resolve, waitTime));

            return this.waitForAvailableSlot();
        }

        this.requestTimes.push(now);
    }
}

const rateLimiter = new RateLimiter();

export interface SneakerApiResponse {
    id: string;
    brand: string;
    colorway: string;
    estimatedMarketValue: number;
    gender: string;
    image: {
        "360"?: string[];
        original: string;
        small: string;
        thumbnail: string;
    };
    links: {
        goat?: string;
        stockX?: string;
        stadiumGoods?: string;
        flightClub?: string;
    };
    name: string;
    releaseDate: string;
    releaseYear: number;
    retailPrice: number;
    silhouette: string;
    sku: string;
    story: string;
}

export interface SneakerListResponse {
    count: number;
    results: SneakerApiResponse[];
}

export interface Brand {
    id: string;
    name: string;
}

export interface Gender {
    id: string;
    name: string;
}

class SneakerApiService {
    private async makeRequest<T>(endpoint: string): Promise<T> {
        await rateLimiter.waitForAvailableSlot();

        try {
            const response = await fetch(`${BASE_URL}${endpoint}`, {
                method: "GET",
                headers: {
                    Accept: "application/json",
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            // Log error for debugging purposes
            throw error;
        }
    }

    async getSneakers(params: {
        limit?: number;
        brand?: string;
        gender?: string;
        releaseYear?: string;
        sort?: string;
        page?: number;
    } = {},
    ): Promise<SneakerListResponse> {
        const queryParams = new URLSearchParams();

        // Default limit to avoid too many results
        queryParams.append("limit", (params.limit || 20).toString());

        if (params.brand) queryParams.append("brand", params.brand);
        if (params.gender) queryParams.append("gender", params.gender);
        if (params.releaseYear)
            queryParams.append("releaseYear", params.releaseYear);
        if (params.sort) queryParams.append("sort", params.sort);
        if (params.page) queryParams.append("page", params.page.toString());

        const endpoint = `/sneakers?${queryParams.toString()}`;

        return this.makeRequest<SneakerListResponse>(endpoint);
    }

    async getSneakerById(id: string): Promise<SneakerApiResponse> {
        return this.makeRequest<SneakerApiResponse>(`/sneakers/${id}`);
    }

    async getBrands(): Promise<Brand[]> {
        return this.makeRequest<Brand[]>("/brands");
    }

    async getGenders(): Promise<Gender[]> {
        return this.makeRequest<Gender[]>("/genders");
    }

    async searchSneakers(params: {
        name: string;
        limit?: number;
        brand?: string;
        gender?: string;
    }): Promise<SneakerListResponse> {
        const queryParams = new URLSearchParams();

        queryParams.append("name", params.name);
        queryParams.append("limit", (params.limit || 20).toString());

        if (params.brand) queryParams.append("brand", params.brand);
        if (params.gender) queryParams.append("gender", params.gender);

        const endpoint = `/sneakers?${queryParams.toString()}`;

        return this.makeRequest<SneakerListResponse>(endpoint);
    }

    // Get popular sneakers with recent releases
    async getPopularSneakers(limit: number = 20): Promise<SneakerListResponse> {
        return this.getSneakers({
            limit,
            releaseYear: "gte:2020",
            sort: "releaseDate:desc",
        });
    }

    // Get sneakers by specific brands
    async getSneakersByBrands(
        brands: string[],
        limit: number = 20,
    ): Promise<SneakerListResponse> {
        // For multiple brands, we'll make separate requests and combine
        // This is a limitation of the API - it doesn't support multiple brands in one request
        const allResults: SneakerApiResponse[] = [];

        for (const brand of brands) {
            try {
                const result = await this.getSneakers({
                    brand: brand.toLowerCase(),
                    limit: Math.ceil(limit / brands.length),
                    releaseYear: "gte:2018",
                    sort: "releaseDate:desc",
                });

                allResults.push(...result.results);
            } catch {
                // Skip brands that fail to load
            }
        }

        return {
            count: allResults.length,
            results: allResults.slice(0, limit),
        };
    }
}

export const sneakerApi = new SneakerApiService();