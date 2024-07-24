<template>
    <Navbar expand="lg" margin="y-5">
        <Container>
            <NavbarBrand>Deniz <br> Setyawan.</NavbarBrand>
            <NavbarToggler />
            <NavbarCollapse>
                <NavbarNav margin="s-auto">
                    <NavLink href="/">Home</NavLink>
                    <NavLink href="/about">About</NavLink>
                    <NavLink href="/works">Works</NavLink>
                    <NavLink href="/portfolio">Portfolio</NavLink>
                    <NavLink href="/contact">Contact</NavLink>
                </NavbarNav>
            </NavbarCollapse>
        </Container>
    </Navbar>
</template>

<style scoped>
.navbar {
    font-weight: 700 !important;
}

.nav-link {
    font-size: 1.2rem;
    color: #c4c4c4;
}

.navbar-nav .nav-link.active, .navbar-nav .nav-link.show {
    text-decoration: underline;
}
</style>