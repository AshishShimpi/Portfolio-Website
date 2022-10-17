export default {
    name: 'projects',
    type: 'document',
    title: 'Projects',
    fields: [
        {
            name: 'rank',
            type: 'number',
            title: 'Rank',
        },
        {
            name: 'name',
            type: 'string',
            title: 'Name',
        },
        {
            title: 'About',
            name: 'about',
            type: 'text',
            rows: 5
        },
        {
            title: 'Host URL',
            name: 'hostUrl',
            type: 'url'
        },
        {
            title: 'Frontend',
            name: 'front',
            type: 'text',
            rows: 1
        },
        {
            title: 'Backend',
            name: 'back',
            type: 'text',
            rows: 1
        },
        {
            title: 'other',
            name: 'other',
            type: 'text',
            rows: 1
        },
        {
            name: 'image',
            type: 'image',
            title: 'Project Thumbnail',
            options: {
                hotspot: true // <-- Defaults to false
            }
        },
        {
            title: 'Project Link',
            name: 'projectUrl',
            type: 'url'
        }
    ]
}