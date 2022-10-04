import { IoBedOutline } from 'react-icons/io5';

function SearchNav() {
  return (
    <div className=" absolute -bottom-10 flex justify-around items-center w-full max-w-5xl py-6 z-2 bg-slate-400">
      <div className="bg-slate-400 flex justify-center items-center gap-1">
        <IoBedOutline className="header-icon" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Where your going?"
        />
      </div>
      <div className="bg-slate-400 flex justify-center items-center gap-1">
        <IoBedOutline className="header-icon" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Where your going?"
        />
      </div>
      <div className="bg-slate-400 flex justify-center items-center gap-1">
        <IoBedOutline className="header-icon" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Where your going?"
        />
      </div>
    </div>
  );
}

export default SearchNav;
