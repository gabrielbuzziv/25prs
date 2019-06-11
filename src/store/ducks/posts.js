export const Types = {
  GET_LIST_REQUEST: 'posts/GET_LIST_REQUEST',
};

const initialState = {
  data: [
    {
      id: Math.random(),
      title: 'Lorem ipsum dolor sit amet',
      slug: 'lorem-ipsum-dolor-sit-amet',
      status: 'review',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ut elit hendrerit molestie. Aliquam in arcu a tellus convallis pellentesque. Cras interdum nulla massa, ac congue nisl gravida ac. Integer cursus vehicula erat, et pharetra risus lacinia in. Nullam non diam semper, rhoncus est eget, dictum sapien. Morbi porttitor odio ut aliquam rutrum. Nulla egestas elit neque, a vestibulum est vulputate ac. Aliquam a diam sit amet turpis egestas bibendum vitae sed augue. Nulla pulvinar quis neque in efficitur.',
    },
    {
      id: Math.random(),
      title: 'Consectetur adipiscing elit',
      slug: 'consectetur-adipiscing-elit',
      status: 'pending',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ut elit hendrerit molestie. Aliquam in arcu a tellus convallis pellentesque. Cras interdum nulla massa, ac congue nisl gravida ac. Integer cursus vehicula erat, et pharetra risus lacinia in. Nullam non diam semper, rhoncus est eget, dictum sapien. Morbi porttitor odio ut aliquam rutrum. Nulla egestas elit neque, a vestibulum est vulputate ac. Aliquam a diam sit amet turpis egestas bibendum vitae sed augue. Nulla pulvinar quis neque in efficitur.',
    },
    {
      id: Math.random(),
      title: 'Vestibulum finibus ut elit hendrerit molestie',
      slug: 'vestibulum-finibus-ut-elit-hendrerit-molestie',
      status: 'approved',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ut elit hendrerit molestie. Aliquam in arcu a tellus convallis pellentesque. Cras interdum nulla massa, ac congue nisl gravida ac. Integer cursus vehicula erat, et pharetra risus lacinia in. Nullam non diam semper, rhoncus est eget, dictum sapien. Morbi porttitor odio ut aliquam rutrum. Nulla egestas elit neque, a vestibulum est vulputate ac. Aliquam a diam sit amet turpis egestas bibendum vitae sed augue. Nulla pulvinar quis neque in efficitur.',
    },
    {
      id: Math.random(),
      title: 'Aliquam in arcu a tellus convallis pellentesque',
      slug: 'aliquam-in-arcu-a-tellus-convallis-pellentesque',
      status: 'approved',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ut elit hendrerit molestie. Aliquam in arcu a tellus convallis pellentesque. Cras interdum nulla massa, ac congue nisl gravida ac. Integer cursus vehicula erat, et pharetra risus lacinia in. Nullam non diam semper, rhoncus est eget, dictum sapien. Morbi porttitor odio ut aliquam rutrum. Nulla egestas elit neque, a vestibulum est vulputate ac. Aliquam a diam sit amet turpis egestas bibendum vitae sed augue. Nulla pulvinar quis neque in efficitur.',
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const Creators = {
  getPostsRequest: () => ({
    type: Types.GET_LIST_REQUEST,
  }),
};
