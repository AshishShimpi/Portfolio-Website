export default {
    name: 'profile',
    type: 'document',
    title: 'Profile',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },

        {
            name: 'email',
            type: 'string',
            title: 'Email',
        },

        {
            name: 'pic',
            type: 'image',
            title: 'Profile Pic',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },

        {
            title: 'Resume',
            name: 'resume',
            type: 'file'
        },
        {
            name: 'contact',
            type: 'number',
            title: 'Contact Number',
        }
    ]

}