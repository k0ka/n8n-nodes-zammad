import type { INodeProperties } from 'n8n-workflow';

export const articleDescription: INodeProperties[] = [
	// ----------------------------------
	//           operations
	// ----------------------------------
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['article'],
			},
		},
		options: [
			{
				name: 'Get',
				value: 'get',
				description: 'Retrieve an article',
				action: 'Get an article',
			},
			{
				name: 'Get Attachment',
				value: 'getAttachment',
				description: 'Retrieve an attachment',
				action: 'Get an attachment',
			},
		],
		default: 'get',
	},

	// ----------------------------------
	//             fields
	// ----------------------------------
	{
		displayName: 'Article ID',
		name: 'id',
		type: 'string',
		description:
			'Article to retrieve. Specify an ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>.',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['get'],
			},
		},
	},
	{
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'string',
		description: 'Specify a Ticket ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['getAttachment'],
			},
		},
	},
	{
		displayName: 'Article ID',
		name: 'articleId',
		type: 'string',
		description: 'Specify an Article ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['getAttachment'],
			},
		},
	},
	{
		displayName: 'Attachment ID',
		name: 'attachmentId',
		type: 'string',
		description: 'Specify an Attahcment ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['getAttachment'],
			},
		},
	},
];
