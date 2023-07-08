import { AxiosBuilder } from "./axios.builder";
import { getEnvironmentUrl as baseURL } from "./axios.helpers";

const axiosInstances = {
  public: AxiosBuilder.build()
    .withUrl(baseURL())
    .withDefaultHeader()
    .toDomain()
    .initInstance(),
  private: {
    client: {
      default: AxiosBuilder.build()
        .withUrl(baseURL())
        .withDefaultHeader()
        .haveCredentials()
        .toDomain()
        .initInstance(),
      fileImage: AxiosBuilder.build()
        .withUrl(baseURL())
        .withHeaders({
          "Content-Type": "multipart/form-data",
        })
        .haveCredentials()
        .toDomain()
        .initInstance(),
    },
    adm: {
      default: AxiosBuilder.build()
        .withUrl(baseURL())
        .withDefaultHeader()
        .haveCredentials()
        .toDomain()
        .initInstance(),
      fileImage: AxiosBuilder.build()
        .withUrl(baseURL())
        .withHeaders({
          "Content-Type": "multipart/form-data",
        })
        .haveCredentials()
        .toDomain()
        .initInstance(),
    },
  },
};

export { axiosInstances };
