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
            name: 'about',
            title: 'About',
            type: 'array',
            of: [
                {
                    type: 'block'
                },
                {
                    type: 'image',
                    fields: [
                        {
                            type: 'text',
                            name: 'alt',
                            title: 'Alternative text',
                            description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                            options: {
                                isHighlighted: true
                            }
                        }
                    ]
                }
            ]
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
        },

        {
            name: 'backg',
            type: 'image',
            title: 'Background Pic',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
    ]

}