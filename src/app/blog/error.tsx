'use client'

export default function Error({error} : {error: Error}){ // страница будет отображена при ошибочном запросе на сервер, например при ошибке в fetch
	return <h1>Oops!!! {error.message} </h1>
}