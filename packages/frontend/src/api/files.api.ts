import { apiClient } from "@diploma/frontend/api/_client";

type FileMetaResponsePayload = {
  SPP_ROOT: Record<string, any>;
};

class FilesApi {
  async getFiles() {
    const { data } = await apiClient.get<string[]>("files");

    return data;
  }

  async getFileMeta(fileId: string) {
    const { data } = await apiClient.get<FileMetaResponsePayload>(`files/${fileId}/meta`);

    return data;
  }
}

export const filesApi = new FilesApi();
