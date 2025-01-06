import { Endpoints } from "../enums/api";
import { Bean, Color } from "../types/beans";

const BASE_URL: string = "https://tikal-home-assignment.vercel.app/api";

interface ApiError {
  message: string;
}

const handleApiError = async (response: Response): Promise<any> => {
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

export const fetchBeans = async (): Promise<Bean[]> => {
  try {
    const response = await fetch(`${BASE_URL}/${Endpoints.BEANS}`);
    return await handleApiError(response);
  } catch (error: any) {
    throw new Error(`Failed to fetch beans: ${error.message}`);
  }
};

export const fetchColors = async (): Promise<Color[]> => {
  try {
    const response = await fetch(`${BASE_URL}/${Endpoints.COLORS}`);
    return await handleApiError(response);
  } catch (error: any) {
    throw new Error(`Failed to fetch colors: ${error.message}`);
  }
};

export const fetchCombinations = async (): Promise<Bean[]> => {
  try {
    const response = await fetch(`${BASE_URL}/${Endpoints.COMBINATIONS}`);
    return await handleApiError(response);
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
