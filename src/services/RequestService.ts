import axios from 'axios';
import { Province, Regency, District, Village } from '../interfaces';

const apiClient = axios.create({
  baseURL: process.env.REACT_PUBLIC_BASE_API || 'http://apikab.jcamp.pt/public/api/v1/reference/',
  headers: {
    "Content-type": "application/json",
  },
});

const RequestService = {
  getProvince: async (): Promise<Province[]> => {
    const response = await apiClient.get<Province[]>("provinces");
      return response.data;
  },
  getRegency: async (provinceId: number | null): Promise<Regency[]> => {
    const response = await apiClient.get<Regency[]>(`regencies_of/${provinceId}`);
    return response.data;
  },
  getDistrict: async (regencyId: number | null): Promise<District[]> => {
    const response = await apiClient.get<District[]>(`districts_of/${regencyId}`);
    return response.data;
  },
  getVillage: async (districtId: number | null): Promise<Village[]> => {
    const response = await apiClient.get<Village[]>(`villages_of/${districtId}`);
    return response.data;
  }
};

export default RequestService;
