import apiSlice from '../../../app/apiSlice';
const contactApiSlice = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    sendContactForm: build.mutation({   // <- שינית את השם מ־contact ל־sendContactForm
      query: (userData) => ({
        url: 'api/contactUs',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ["Contact"],
    }),
    getContacts: build.query({
      query: () => 'api/contactUs',
      providesTags: ["Contact"],
    }),
  }),
});

export const { useSendContactFormMutation, useGetContactsQuery } = contactApiSlice;
