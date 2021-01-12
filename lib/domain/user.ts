
export interface UserProperties
{
    id: string
    email: string
    authorizedUser: boolean
    
    additionalData: any
}

export class User implements UserProperties
{
    public readonly id: string;
    public readonly email: string;
    public readonly authorizedUser: boolean;
    public readonly additionalData: any;
    
    constructor(
        properties: UserProperties
    )
    {
    
    }
    
    static instanceWithUserProperties(properties: UserProperties)
    {
        return new User(properties)
    }
}


