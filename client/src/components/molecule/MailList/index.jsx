function MailList() {
  return (
    <div className="w-full h-full mt-12 flex flex-col items-center gap-5 p-12 bg-iconNav border-b-4 border-yellow-200 ">
      <h1 className="text-4xl font-Inter font-bold text-heroSec ">Save time, Save money!, More have fun!</h1>
      <span className="text-lg font-extralight">Sign up and well send the best deals to you</span>
      <div className="">
        <input type="text" placeholder="Fill Your Email" className="w-[300px] h-[40px] p-[10px] border-none mr-2 rounded-md" />
        <button type="button" className="  h-[40px] py-0 px-[10px] font-medium border-none rounded-lg cursor-pointer bg-heroSec text-iconNav">Subscribe</button>
      </div>
    </div>
  );
}

export default MailList;
