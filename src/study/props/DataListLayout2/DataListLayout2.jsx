function DataListLayout2({dataList}) {
    return <ul>
        {dataList.map((data, index) => <li key={index}>{data}</li>)}
    </ul>;
}

export default DataListLayout2;