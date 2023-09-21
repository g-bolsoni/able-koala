export interface ContactUsSend {
    NDIS_name                   : string
    email                       : string
    phone                       : string
    bedrooms                    : number
    specific_room               : string
    support_coodinator          : string
    coodinator_name             : string
    coodinator_email            : string
    coodinator_phone            : string
    family_member               : string
    contact_person1             : string
    contact_person2             : string
    STA_accomodation            : string
    STA_check_in_date           : string
    STA_check_out_date          : string
    NDIS_plan                   : string
    manager_email               : string
    specializedEquipmentDetails : string
    specializedEquipment        : string
    additional_requirements_text: string
    isParkingRequired           : string
    isCarTransfers              : string
    origin                      : string
}

export function contactUsSendToJson(data?: any): ContactUsSend {
    return {
        NDIS_name                   : data['NDIS_name'],
        email                       : data['email'],
        phone                       : data['phone'],
        bedrooms                    : data['bedrooms'],
        specific_room               : data['specific_room'],
        support_coodinator          : data['support_coodinator'],
        coodinator_name             : data['coodinator_name'],
        coodinator_email            : data['coodinator_email'],
        coodinator_phone            : data['coodinator_phone'],
        family_member               : data['family_member'],
        contact_person1             : data['contact_person1'],
        contact_person2             : data['contact_person2'],
        STA_accomodation            : data['STA_accomodation'],
        STA_check_in_date           : data['STA_check_in_date'],
        STA_check_out_date          : data['STA_check_out_date'],
        NDIS_plan                   : data['NDIS_plan'],
        manager_email               : data['manager_email'],
        specializedEquipmentDetails : data['specializedEquipmentDetails'],
        specializedEquipment        : data['specializedEquipment'],
        additional_requirements_text: data['additional_requirements_text'],
        isParkingRequired           : data['isParkingRequired'],
        isCarTransfers              : data['isCarTransfers'],
        origin                      : data['origin']
    }
}
