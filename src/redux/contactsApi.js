import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const contactsApi = createApi({
  reducerPath: "contacts",

  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token")

      if (token) {
        headers.set("Authorization", `Bearer ${token}`)
      }

      return headers
    },
  }),
  tagTypes: ["Contacts"],

  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ["Contacts"],
    }),

    addContact: builder.mutation({
      query: (value) => ({
        url: "/contacts",
        method: "POST",
        body: value,
      }),
      invalidatesTags: ["Contacts"],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),

    updateContact: builder.mutation({
      query: (id, value) => ({
        url: `/contacts/${id}`,
        method: "PATCH",
        body: value,
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
})

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi
