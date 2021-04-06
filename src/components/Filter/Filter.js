import { DATAS } from '../../constantes/MOCKDATA';
import './Filter.css'
/*import funnel from '../Barre/funnel.png'*/


const Filter = () => (
    <form action="/" method="get">
        <label className='.filter_label' for="site-search"></label>
        <input className='.filter_input' type="search" id="site-search" name="q" aria-label="Search through site content"></input>
        <button className='.filter_button' type="submit">{DATAS.SEARCH}</button>
    </form>
);

export default Filter;