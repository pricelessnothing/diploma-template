import { apiClient } from "@diploma/frontend/api/_client";

class FilesApi {
  async getFiles() {
    const { data } = await apiClient.get<string[]>("files");

    return data;
  }
}

export const filesApi = new FilesApi();
