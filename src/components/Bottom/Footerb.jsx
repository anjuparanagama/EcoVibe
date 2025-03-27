export default function FooterB() {
    return (
<div className="mt-14 px-12 pb-4 pt-10 bg-[#F2F2F2]">
    <div className="flex flex-row">
        <div className="flex-1">
            <h3 className="font-bold">GREEN</h3><br/>
            <p>We help you find<br/>Your dream plant</p>
            
            <div className="flex flex-row py-8 gap-5">
                <button><img className="w-[50px] h-[50px]" src="images/fb.png"/></button>
                <button><img className="w-[50px] h-[50px]"src="images/insta.png"/></button>
                <button><img className="w-[50px] h-[50px]"src="images/twitter.png"/></button>
            </div>
        </div>

        <div className="flex flex-1 flex-row gap-7  justify-center leading-[50px]">
            <div>
                <p className="font-bold">Information</p>
                <p>About</p>
                <p>Product</p>
                <p>Blog</p>
            </div>

            <div>
                <p className="font-bold">Company</p>
                <p>Community</p>
                <p>Career</p>
                <p>Our Story</p>
            </div>

            <div>
                <p className="font-bold">Contact</p>
                <p>Getting Started</p>
                <p>Pricing</p>
                <p>Resources</p>
            </div>
        </div>
    </div>

    <div className="text-center pt-10">
        <p>2024 all Right Reserved Term of use <span className="font-bold">GREENMIND</span></p>
    </div>
</div>
    );
}