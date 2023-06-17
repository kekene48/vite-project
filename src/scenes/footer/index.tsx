import Logo from '@/assets/Logo.png'

const Footer = () => {
    return (
        <footer id="footer" className="bg-primary-100 py-16">
            <div className="justify-center mx-auto w-5/6 gap-16 md:flex">
                <div className="mt-16 basis-1/2 md:mt-0">
                    <img src={Logo} alt="logo" />
                    <p className="my-5">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut at,
                        quisquam odit suscipit molestiae, nihil nesciunt dolorem labore
                        incidunt animi esse, natus earum quibusdam deleniti!
                    </p>
                    <p>©️ Evogym All Rights Reserved.</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Links</h4>
                    <p className="mt-5">Massa orci senectus</p>
                    <p className="mt-5">Et gravida id et etiame</p>
                    <p>Ullamcorper vivamus</p>
                </div>
                <div className="mt-16 basis-1/4 md:mt-0">
                    <h4 className="font-bold">Contact Us</h4>
                    <p className="mt-5">Tempus metus mattis risus volutpat egest</p>
                    <p>(333)425-6825</p>
                </div>        </div>
        </footer>
    )
}

export default Footer