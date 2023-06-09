export interface ContactUs {
    name              : string
    email             : string
    phone             : string
    contact_person1   : string
    servicePersonEmail: string // nao tem
    servicePersonPhone: string // nao tem
    manager_email     : string
    coodinator_email  : string
    coodinator_name   : string
    coodinator_phone  : string
    family_member     : string
    NDIS_plan         : string
    support_coodinator: string

}


export function contactUs(data?: any): ContactUs {
    console.log(JSON.stringify(data));
    return {
        name               : data['name'],
        email              : data['email'],
        phone              : data['phone'],
        contact_person1    : data['contact_person1'],
        servicePersonEmail : data['servicePersonEmail'],
        servicePersonPhone : data['servicePersonPhone'],
        manager_email      : data['manager_email'],
        coodinator_email   : data['coodinator_email'],
        coodinator_name    : data['coodinator_name'],
        coodinator_phone   : data['coodinator_phone'],
        family_member      : data['family_member'],
        NDIS_plan          : data['NDIS_plan'],
        support_coodinator : data['support_coodinator']
    }
}
