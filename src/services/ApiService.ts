import { App } from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import { AxiosResponse, AxiosRequestConfig } from "axios";
import { Auth0Plugin } from "@auth0/auth0-vue";

/**
 * @description service to call HTTP request via Axios
 */
class ApiService {
  /**
   * @description property to share vue instance
   */
  public static vueInstance: App;

  /**
   * @description property to share auth0
   */
  public static auth0Service: Auth0Plugin;

  /**
   * @description initialize vue axios
   */
  public static init(app: App<Element>, Auth0Service: Auth0Plugin) {
    ApiService.vueInstance = app;
    ApiService.vueInstance.use(VueAxios, axios);
    ApiService.vueInstance.axios.defaults.baseURL = process.env?.VUE_APP_BASE_URL;
    ApiService.auth0Service = Auth0Service;
  }

  /**
   * @description set the default request headers
   * @returns boolean: true if token exists, else false
   */
  public static setHeader(token?: string): boolean {
    const _token = token ? token : ApiService.auth0Service.idTokenClaims?.value?.__raw;
    if (_token) {
      ApiService.vueInstance.axios.defaults.headers.common["Authorization"] = `Bearer ${_token}`;
      ApiService.vueInstance.axios.defaults.headers.common["Content-Type"] = "application/json";
      return true;
    }
    return false;
  }

  /**
   * @description GET request
   * @param resource: string
   * @param params?: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static get(
    resource: string,
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.get(resource, params);
  }

  /**
   * @description POST request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static async post(
    resource: string,
    data: any,
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.post(`${resource}`, data, params);
  }

  /**
   * @description PUT request
   * @param resource: string
   * @param params: AxiosRequestConfig
   * @returns Promise<AxiosResponse>
   */
  public static put(
    resource: string,
    slug: string,
    data: any,
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.put(`${resource}/${slug}`, data, params);
  }

  /**
   * @description DELETE request
   * @param resource: string
   * @param slug: string
   * @returns Promise<AxiosResponse>
   */
  public static async delete(
    resource: string,
    slug = "" as string
  ): Promise<AxiosResponse> {
    return ApiService.vueInstance.axios.delete(`${resource}/${slug}`);
  }
}

export default ApiService;
