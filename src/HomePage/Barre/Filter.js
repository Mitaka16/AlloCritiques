import'./Filter.css'



const SearchBar = () => (
    <form action="/" method="get">
        <input type="search" id="site-search" name="q"aria-label="Search through site content"></input>
        <svg aria-hidden="true" class="s-input-icon s-input-icon__search svg-icon iconSearch" width="180" height="30" viewBox="0 0 18 18">
        <path d="M18 16.5l-5.14-5.18h-.35a7 7 0 10-1.19 1.19v.35L16.5 18l1.5-1.5zM12 7A5 5 0 112 7a5 5 0 0110 0z"></path></svg>
      
     
  
    </form>
   
);

export default SearchBar;
     

