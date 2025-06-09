import 'package:flutter/material.dart';
import 'package:teashop/ShopPage/ui_shop_page.dart' show TeaShopProductOverview;

class TeaShopLandingPage extends StatefulWidget {
  final String title;

  const TeaShopLandingPage({super.key, required this.title});

  @override
  State<TeaShopLandingPage> createState() => _TeaShopLandingPageState();
}

class _TeaShopLandingPageState extends State<TeaShopLandingPage>
    with SingleTickerProviderStateMixin {
  late AnimationController _controller;
  late Animation<double> _fadeInAnimation;
  bool _showMenu = false;

  @override
  void initState() {
    super.initState();
    _controller = AnimationController(
      duration: const Duration(seconds: 2),
      vsync: this,
    );
    _fadeInAnimation = CurvedAnimation(
      parent: _controller,
      curve: Curves.easeIn,
    );
    _controller.forward();
  }

  @override
  void dispose() {
    _controller.dispose();
    super.dispose();
  }

  void _toggleMenu() {
    setState(() {
      _showMenu = !_showMenu;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          // Decorative background
          Positioned.fill(
            child: Opacity(
              opacity: 0.08,
              child: Image.network(
                'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80',
                fit: BoxFit.cover,
              ),
            ),
          ),
          Center(
            child: FadeTransition(
              opacity: _fadeInAnimation,
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 64),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    GestureDetector(
                      onTap: () => setState(() {}),
                      child: Hero(
                        tag: 'teashop-logo',
                        child: Image.network(
                          'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=400&q=80',
                          height: 180,
                        ),
                      ),
                    ),
                    const SizedBox(height: 32),
                    Text(
                      widget.title,
                      style: const TextStyle(
                        fontSize: 42,
                        fontWeight: FontWeight.bold,
                        color: Colors.deepPurple,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 16),
                    const Text(
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
                      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.black87,
                        height: 1.4,
                      ),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 40),
                    ElevatedButton(
                      onPressed: () {
                        Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (context) => TeaShopProductOverview(),
                          ),
                        );
                      },
                      style: ElevatedButton.styleFrom(
                        backgroundColor: Colors.deepPurple,
                        padding: const EdgeInsets.symmetric(horizontal: 36, vertical: 16),
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(30),
                        ),
                        elevation: 6,
                        shadowColor: Colors.deepPurpleAccent,
                      ),
                      child: const Text(
                        'Jetzt entdecken',
                        style: TextStyle(fontSize: 20, color: Colors.white),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ),
          // Collapsible menu button
          Positioned(
            top: 40,
            right: 30,
            child: IconButton(
              icon: Icon(_showMenu ? Icons.close : Icons.menu, size: 32, color: Colors.deepPurple),
              onPressed: _toggleMenu,
              tooltip: 'Menü',
            ),
          ),
          // Collapsible menu
          if (_showMenu)
             Positioned(
            top: 40,
            right: 30,
            child: IconButton(
              icon: Icon(_showMenu ? Icons.close : Icons.menu, size: 32, color: Colors.deepPurple),
              onPressed: _toggleMenu,
              tooltip: 'Menü',
            ),
          ),
          // Collapsible menu with outside tap detection
          if (_showMenu)
            Positioned.fill(
              child: GestureDetector(
                behavior: HitTestBehavior.translucent,
                onTap: () {
                  setState(() {
                    _showMenu = false;
                  });
                },
                child: Stack(
                  children: [
                    Positioned(
                      top: 80,
                      right: 30,
                      child: Material(
                        elevation: 8,
                        borderRadius: BorderRadius.circular(16),
                        color: Colors.white,
                        child: Container(
                          width: 180,
                          padding: const EdgeInsets.symmetric(vertical: 12),
                          child: Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              ListTile(
                                leading: const Icon(Icons.store, color: Colors.deepPurple),
                                title: const Text('Shop'),
                                onTap: () {
                                  Navigator.of(context).push(
                                    MaterialPageRoute(
                                      builder: (context) => TeaShopProductOverview(),
                                    ),
                                  );
                                  _toggleMenu();
                                },
                              ),
                              ListTile(
                                leading: const Icon(Icons.info_outline, color: Colors.deepPurple),
                                title: const Text('Über uns'),
                                onTap: () {
                                  // TODO: Implement navigation
                                  _toggleMenu();
                                },
                              ),
                              ListTile(
                                leading: const Icon(Icons.contact_mail, color: Colors.deepPurple),
                                title: const Text('Kontakt'),
                                onTap: () {
                                  // TODO: Implement navigation
                                  _toggleMenu();
                                },
                              ),
                            ],
                          ),
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          // Impressum link at the bottom
          Positioned(
            bottom: 24,
            left: 0,
            right: 0,
            child: Center(
              child: GestureDetector(
                onTap: () {
                  // TODO: Implement Impressum navigation
                },
                child: const Text(
                  'Impressum',
                  style: TextStyle(
                    decoration: TextDecoration.underline,
                    color: Colors.deepPurple,
                    fontSize: 16,
                  ),
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}