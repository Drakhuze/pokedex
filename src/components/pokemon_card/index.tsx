import { IPokemon } from "../../interfaces/IPokemon";
import { XMarkIcon, } from '@heroicons/react/24/solid';


interface IPokemonProps {
    index: number;
    pokemon: IPokemon;
    deletePokemon: any;
    goToDetail: any;
}
interface IPokemonState {

}

function PokemonCard(props: IPokemonProps) {

    function capitalizeFirst(input:string){
        return input.charAt(0).toUpperCase() + input.slice(1);
    }

    return (
        <div className="bg-neutral-600 h-72 w-52 m-3 rounded-lg overflow-auto p-4">
            <div className="flex justify-end">
                <XMarkIcon width={20} height={20} className="cursor-pointer hover:text-neutral-200 active:text-neutral-400" onClick={() => props.deletePokemon(props.index)} />
            </div>
            <div className="cursor-pointer hover:text-neutral-200" onClick={() => props.goToDetail(props.pokemon.id)}>
                {capitalizeFirst(props.pokemon.name)}
            </div>
            <div>
                {props.pokemon.id}
            </div>
            <div className="flex justify-center">
                <img src={props.pokemon.sprite} alt="" width={100} height={100}/>
            </div>
        </div>
    );
}

export default PokemonCard;