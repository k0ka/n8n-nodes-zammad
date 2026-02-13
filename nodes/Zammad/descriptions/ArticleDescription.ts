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
				name: 'Create',
				value: 'create',
				description: 'Create a new article',
				action: 'Create an article',
			},
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
		displayName: 'Ticket ID',
		name: 'ticketId',
		type: 'string',
		description:
			'Specify a Ticket ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Article Type',
		name: 'type',
		type: 'options',
		options: [
			{
				name: 'Chat',
				value: 'chat',
			},
			{
				name: 'Email',
				value: 'email',
			},
			{
				name: 'Fax',
				value: 'fax',
			},
			{
				name: 'Note',
				value: 'note',
			},
			{
				name: 'Phone',
				value: 'phone',
			},
			{
				name: 'SMS',
				value: 'sms',
			},
		],
		default: 'note',
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Subject',
		name: 'subject',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'body',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Sender',
		name: 'sender',
		type: 'options',
		options: [
			{
				name: 'Agent',
				value: 'Agent',
			},
			{
				name: 'Customer',
				value: 'Customer',
			},
			{
				name: 'System',
				value: 'System',
				description: 'Only subject will be displayed in Zammad',
			},
		],
		default: 'Agent',
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['create'],
			},
		},
	},
	{
		displayName: 'Visibility',
		name: 'visibility',
		type: 'options',
		default: 'internal',
		options: [
			{
				name: 'External',
				value: 'external',
				description: 'Visible to customers',
			},
			{
				name: 'Internal',
				value: 'internal',
				description: 'Visible to help desk',
			},
		],
		displayOptions: {
			show: {
				resource: ['article'],
				operation: ['create'],
			},
		},
	},
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
		description:
			'Specify a Ticket ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
		description:
			'Specify an Article ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
		description:
			'Specify an Attahcment ID using an <a href="https://docs.n8n.io/code/expressions/">expression</a>',
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
