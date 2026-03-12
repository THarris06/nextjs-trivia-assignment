import Character from "@/components/Character.jsx"

export async function generateStaticParams() {
    const data = await fetch('https://rickandmortyapi.com/api/character')
        .then((res) => res.json())

    return data.results.map((character) => ({
        id: character.id.toString(),
    }))
}

export default async function CharacterDetail({ params }) {
    const {id} = await params;
    const character = await fetch('https://rickandmortyapi.com/api/character/' + id)
        .then((res) => res.json());
    return (
        <Character name={character.name} species={character.species} imageURL={character.image}/>
    )
}