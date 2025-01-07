import { Endpoints } from "../enums/api";
import { BeansRes } from "../types/JellyBeans";

const BASE_URL: string = "https://tikal-home-assignment.vercel.app/api";

interface ApiError {
  message: string;
}

const handleApiResult = async (response: Response): Promise<any> => {
  if (!response.ok) {
    try {
      const errorData: ApiError = await response.json();
      throw new Error(
        `Error ${response.status}: ${response.statusText} - ${
          errorData.message || "Unknown error"
        }`
      );
    } catch (e) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }
  }
  return response.json();
};

export const fetchBeans = async (
  offset: number,
  limit: number
): Promise<BeansRes> => {
  try {
    const response = await fetch(
      `${BASE_URL}/${Endpoints.BEANS}?offset=${offset}&limit=${limit}`
    );
    return await handleApiResult(response);
  } catch (error: any) {
    throw new Error(`Failed to fetch beans: ${error.message}`);
  }
};

export const fetchColor = async (colorId: string): Promise<BeansRes> => {
  try {
    const response = await fetch(
      `${BASE_URL}/${Endpoints.COLORS}?colorId=${colorId}`
    );
    return await handleApiResult(response);
  } catch (error: any) {
    throw new Error(`Failed to fetch colors: ${error.message}`);
  }
};

export const fetchCombinations = async (): Promise<BeansRes> => {
  try {
    const response = await fetch(`${BASE_URL}/${Endpoints.COMBINATIONS}`);
    return await handleApiResult(response);
  } catch (error: any) {
    throw new Error(`Failed to fetch combinations: ${error.message}`);
  }
};

export const checkHealth = async (): Promise<any> => {
  try {
    const response = await fetch(`${BASE_URL}/${Endpoints.HEALTH}`);
    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(
        `Health check failed: ${errorData.message || response.statusText}`
      );
    }
    return await response.json();
  } catch (error: any) {
    throw new Error(`Failed to check health: ${error.message}`);
  }
};
