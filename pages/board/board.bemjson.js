({
	block: 'b-page',
	head: [
	   { elem: 'css', url: 'board.css' }
	],
	content: [
        {
            block: 'b-chan',
            content: [
                {
                    elem: 'navigation',
                    content: [
                        {
                            block: 'b-tags',
                            content: [
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'b-tags', elem: 'link' }],
                                    url: '#',
                                    content: 'b'
                                },
                                {
                                    block: 'b-link',
                                    mix: [{ block: 'b-tags', elem: 'link' }],
                                    url: '#',
                                    content: 'pr'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem: 'content',
                    content: [
                        {
                            block: 'b-board',
                            content: [
                                {
                                    block: 'b-thread',
                                    content: [
                                        {
                                            block: 'b-comment',
                                            mods: {
                                                op: 'yes'
                                            },
                                            id: 181,
                                            content: 'Ya tvoi dom truba shatal!'
                                        },
                                        {
                                            block: 'b-comment',
                                            id: 214,
                                            content: 'Petroleum'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
	]
})