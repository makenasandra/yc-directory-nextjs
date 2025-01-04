import React from "react";
async function Albums() {
    const response = await fetch("https://jsonplaceholder.typicode.com/albums")
    if(!response.ok) throw new Error("Failed to fetch!")
    const albums = await response.json();

    return (
        <div>
            <h1 className="text-3xl">Albums</h1>
            <div className="grid-cols-1 sm:grid-cols-2 md:grid-cols">
                {albums.map((album: {id:number, title:string})=>
                    (
                        <div key={album.id} className="bg-white shadow-md rounded-lg transition">
                            <h3 className="text-lg font-bold mb-2">{album.title}</h3>
                            <p className={"text-gray-600"}>Album ID: {album.id}</p>
                        </div>
                    )
                )}
            </div>
        </div>

    );
}

export default Albums;
