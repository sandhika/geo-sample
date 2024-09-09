import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const usrData = typeof window !== 'undefined'?localStorage.getItem("user") ||"":"";
// const storedUser = JSON.parse(usrData);

// Define a service using a base URL and expected endpoints
export const trackApi = createApi({
  reducerPath: "trackApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.xicreative.id/api",
     mode: "cors", 
    //https://ap-southeast-1.aws.data.mongodb-api.com/app/data-xykkwbw/endpoint/
   // credentials: "same-origin", 
    prepareHeaders: (headers, { getState }) => {
     // headers.set("apiKey", "Jgd9fFSFrjhTBVApszGLOdiA8RAMwNMJsC0wTx3L5ispF4YHOSX74BtK4sdDpKzn");
//     headers.set("email","sandhika.yogaswara@gmail.com");
//     headers.set("password","P@ssw0rd");
//      headers.set("Access-Control-Allow-Origin","*");
//      headers.set("Access-Control-Allow-Credentials","true");
//      headers.set("Access-Control-Allow-Methods","GET,DELETE,PATCH,POST,PUT");
//      headers.set( "Access-Control-Allow-Headers","X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
//      headers.set( "Content-Type","application/ejson");
      headers.set( "Accept","application/json");
      return headers;
    },
  }),
  tagTypes: ["TRACKING"],
  endpoints: builder => ({
   
    getTracks: builder.query({
      query: data => ({
        url: "/tracks",
        method: "GET",
        params: data,
      }),
     
    }),
   getTrackById: builder.query({
     query: id => ({
       url: `/tracks/${id}`,
       method: "GET",
     }),
     providesTags: ["TRACKING"],
   }),
//    invalidatesTags: [{ type: 'CUSTOMERS', id: 'LIST' }],
  }), 

});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { 
  useGetTracksQuery,
  useLazyGetTracksQuery,
  
  useGetTrackByIdQuery,
  useLazyGetTrackByIdQuery,

  
} = trackApi;
