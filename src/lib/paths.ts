const normalizeBaseUrl = (baseUrl: string) => {
  return baseUrl.replace(/\/?$/, '/');
};

const normalizeRelativePath = (path: string) => {
  return path.replace(/^\/+/, '');
};

export const getBasePath = () => {
  return normalizeBaseUrl(import.meta.env.BASE_URL || '/');
};

export const buildDownloadUrl = (fileName: string) => {
  return `${getBasePath()}downloads/${fileName}`;
};

export const buildAssetUrl = (path: string) => {
  return `${getBasePath()}${normalizeRelativePath(path)}`;
};
