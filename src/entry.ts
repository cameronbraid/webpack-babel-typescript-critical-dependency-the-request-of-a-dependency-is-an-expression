function loadPageModule(name: string) : Promise<any> {
  return import(`./src/${name}/page`)
}

loadPageModule("test").then(t => { 
  console.log(t.Foo)
})