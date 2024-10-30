import './software-section.css'
export default function Software () {

    const imgsArr =[{
        id:1,
        name:'jQury',
        image:"https://s3-alpha-sig.figma.com/img/0c64/e748/8e4904ae5818d2c8b7e435bfaf21ae9d?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TEcvteD5USqTrr4jA7CdVIGFbLPqe0xPA9AOjxnoNjIBlXwkHL3SHRHU7rB2pjuSUyzlVcyOUZLIU7Q900YiwCh4s2BU9SRH5ljZy0QgRB58FTgRed1RgzBmyGNMeSS9D5IFmUxGRt5w-TmZgPJUblrMQPq1shQFeMUQyb38TOlMuLWHPI7BPiF2iNTCS-z1cOFUhpueghSaqrSl5eaPQuQxUq41VH38W4a-9jd2fNKtMqgpKW2mdGXfL5sFV073L6DQXVSboBTvk3rRy995Oofkh4xnEyI579YJpw0tjNkungFEe9TvygF-8~zTwcY-YLL4wQ6ntuelFvMJ0ztM-A__"

    },
    {
        id:2,
        name:'Wordpress',
        image:"https://s3-alpha-sig.figma.com/img/3c63/6780/740e3e65ef4ba1415ea277691d93ffe7?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yf6DidL2TFoz0xcnx5KFNg~WC5PHD~RoOx6Q4-ttGhbzq-c9~srMLNC782ajjkiXjiRulmI11iXeISCRUjB7txNPXXAfjC7cpvi3tyG~4pLT5d49qfwbacnr5dSJPMbWnmix13Rx3Uc8XtpWBwxb71VXOS3xd6oDqeGuRJsDEmuvwoT38RjStZIYLSPeyJWQyJBSB3o7IlqmxMlR9jUBdK0sF~nsJsxgCndk9OqzpD26C50b8J~bjvPLdWpoL6QnOyoZSxYFbXYv8Qcn3Zm9BExno9xB1V0mJdwNm4WO~dFZ9l7lG8FDb21n2Oqbl3jQlobAAientPV2xv185z48ZA__"

    },
    {
        id:3,
        name:'less',
        image:"https://s3-alpha-sig.figma.com/img/441b/42c4/8654904175c2a8b7d87751ef18bea595?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m2Sc7CKYIQtxjGNa-xg9o~jL6R6DK5LwnD6D6erbAX9P8bs0hHjE0MeH5wOUleUO3fXiqoxm222VoVDqmK7~3wvaQOrMkq8V0miPkWQ376LVrBbI5HeJ9Tv0akIK-GXxwcSvu2-fTAULHMQaZt1Tb7NfFpT9UJah110dn9LDw-sM8ZX83Uyd7NHh3guycXQDYdg0QIb4WLR4QCJrb61Q1H-IGG1Jxr8wmpunBA9s~ppZU14GTxyzK3EDzuBQSR2IwzSChyyGeeBRfSMVb-8OfK3B7soh~qxRWXHxz-bFKcjmzfZZe~cjgTypLMi4UuQ1XMOxhAyIjXVdDsccpAZRqA__"

    },
    {
        id:4,
        name:'Sass',
        image:"https://s3-alpha-sig.figma.com/img/188c/7fda/c559501855df60f6408b6065567390ad?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=muxqCbCF11SarFWvEBBHmT~e0WsWpDmWxGg9od7iR6PhysHHQGPOeBdc6iAcPdR3mcCcXpQOYdIAl7PFVGcZzk0r3MN9veAxennwc3lGwD6wu3dvfu8~6p9mnoDxPCDTmgyxBNEZPVA6Osky3leHLRc-lrRJVz2mANKuPtFL-dCk30Xzi2VgmJFnd4-zukGr--tck8iml6Ew81r8vbAu7Pj9W9u2QA72cZ8eJHbOyZIprtFF2RJAPlHM9kxk2mZFo3A0q0~jEnE8UrkwfwtIZQQRBR3bs6FEv9jTaScaAtnoNx6lo7UeFFBITgevPoE4z0rhl1Ve2GLpD9vP2UoT8w__"

    },
    {
        id:5,
        name:'Spotify',
        image:"https://s3-alpha-sig.figma.com/img/90dc/535a/8e2bed4306cc0f906b78f00f73e1f138?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mj4AunCA0w~lWms06fr0p3bHNf54V9CsUfo5-52n4ygkAcfWJn-ZLKcmZqbwEtGKVoMAqrGcwyZixP6cy08-aq-MO7~gwcNfgY9gnAwtITGgYxPtjhiuC55mxeHF1CDQUrZ6gpivpcalbymFuBPD3dTdxJG0n9yS7aO6OEwKUACr-0py1eY28BfQ3BP~uMBACsc6X50qE38R2bXnoDWTwFgUP05cSIb10YhjvX309FAkL0Jgkh7wUhbpCXeajoqs~WpAesGzmZeeFXMJkkdgJpAf2EZJ17zALhUacx61T5wQRZxJzvoojls2R5-sSvzFFSyz2AnuIfDRMANwix6S9w__"

    },


]
    return (<>
        <div className="software-section-container">
            <div className="software-logos">

            {
                imgsArr.map((logos)=> <img src={logos.image} className='software-imgs' key={logos.id}/>)
            }

                
            </div>

        </div>
    
    </>)
}