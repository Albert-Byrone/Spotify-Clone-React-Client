            <img
                className="sidebar__logo" 
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="logo"
            />
            <SidebarOption Icon={ HomeIcon } title="Home"/>
            <SidebarOption Icon={ SearchIcon } title="Search"/>
            <SidebarOption Icon={ LibraryMusicIcon } title="Your Library"/>

            <strong className="sidebar__title">PLAYLIST</strong>
            <hr />
            { playlists?.items?.map(playlists =>(
                <SidebarOption title={ playlists.name} /> 
            ))}
