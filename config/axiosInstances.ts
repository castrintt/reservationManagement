import { AxiosBuilder } from "./axiosBuilder";

const publicUserUrl = "https://x8ki-letl-twmt.n7.xano.io/api:YZgQ_Twd/";

export const axiosInstances = {
  publicUsers: AxiosBuilder.builder()
    .withBaseUrl(publicUserUrl)
    .withHeaders({ "Content-type": "application/json" })
    .toDomain()
    .initInstance(),
};
