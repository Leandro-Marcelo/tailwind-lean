import React from "react";
import AppBarResponsive from "../components/List/AppBarResponsive";
import Image from "../components/List/Image";
import Card from "../components/List/Card";

const List = () => {
    const arr = [...Array(20)];
    return (
        <div>
            <AppBarResponsive />
            <div className="bg-[green] flex justify-center items-center mt-32">
                <Image />
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
                {arr.map((_, index) => (
                    <Card key={index} />
                ))}
            </div>
        </div>
    );
};

export default List;
