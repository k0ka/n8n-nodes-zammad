import type { Icon, ICredentialType, INodeProperties } from 'n8n-workflow';

export class Zammad2TokenAuthApi implements ICredentialType {
	name = 'zammad2TokenAuthApi';

	displayName = 'Zammad 2 Token Auth API';

	documentationUrl = 'https://docs.n8n.io/integrations/builtin/credentials/zammad/';

	properties: INodeProperties[] = [
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: '',
			placeholder: 'https://n8n-helpdesk.zammad.com',
			required: true,
		},
		{
			displayName: 'Access Token',
			name: 'accessToken',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
		},
		{
			displayName: 'Ignore SSL Issues (Insecure)',
			name: 'allowUnauthorizedCerts',
			type: 'boolean',
			description: 'Whether to connect even if SSL certificate validation is not possible',
			default: false,
		},
	];

	icon: Icon = 'file:../icons/zammad.svg';
}
