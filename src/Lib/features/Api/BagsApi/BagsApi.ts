import { BaseApi } from "../baseApi";

export const BagApi = BaseApi.injectEndpoints({
  endpoints: (builders) => ({
    getBags: builders.query({
      query: () => ({
        url: "/bags",
        method: "GET",
      }),
    }),
    getSingleBag: builders.query({
      query: (id: string) => ({
        url: `/bags/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBagsQuery, useGetSingleBagQuery } = BagApi;
