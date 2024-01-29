const Layout =({children}: {children: React.ReactNode})=>{
    return(
    <div className="flex-center min-h-screenw-full bg-primary-50 bg-dotted-pattern bgi-cover bg-fixed bg-center">
        {children}
    </div>)
}

export default Layout