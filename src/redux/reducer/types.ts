export type Country = {
    name: {common:string };
    flag: {png: string};
    population: number;
    region: string;
    languages: MyLanguages;
}

type MyLanguages = {
    [key:string]: string;
};