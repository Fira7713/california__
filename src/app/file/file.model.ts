export interface File{
    label: string;
    data: string;
    expandedIcon: string;
    collapsedIcon: string;
    icon?: string;
    children?: File[];


    // data?: any;
    // children?: File[];
    // leaf?: boolean;
    // expanded?: boolean;

}


export interface FileData {
    data : File[];
}
