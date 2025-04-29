/**
 * Utility function to get the correct path for assets, taking into account the base URL
 * when deployed to GitHub Pages or other subdirectory deployments.
 * 
 * @param path The asset path, starting with a slash (e.g., "/img/logo.png")
 * @returns The correct path with the base URL prepended if needed
 */
export function assetPath(path: string): string {
  // If the path is an absolute URL (starts with http:// or https://), return it as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Make sure the path starts with a slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  
  // Get the base URL from Vite's environment variables
  const baseUrl = import.meta.env.BASE_URL;
  
  // If the base URL is just '/', we don't need to modify the path
  if (baseUrl === '/') {
    return normalizedPath;
  }
  
  // Remove trailing slash from base URL if it exists
  const normalizedBaseUrl = baseUrl.endsWith('/') 
    ? baseUrl.slice(0, -1) 
    : baseUrl;
  
  // Combine the base URL with the path
  return `${normalizedBaseUrl}${normalizedPath}`;
}
