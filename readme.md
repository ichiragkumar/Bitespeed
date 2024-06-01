
>         Bitespeed needs a way to identify and keep track of a customer's identity across multiple purchases.

We know that orders on FluxKart.com will always have either an email or phoneNumber in the checkout event.

Bitespeed keeps track of the collected contact information in a relational database table named Contact.
        `{
                id                   Int
                phoneNumber          String?
                email                String?
                linkedId             Int? // the ID of another Contact linked to this one
                linkPrecedence       "secondary"|"primary" // "primary" if it's the first Contact in the link
                createdAt            DateTime
                updatedAt            DateTime
                deletedAt            DateTime?
        }`
