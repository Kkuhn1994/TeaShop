import 'package:flutter/material.dart';

// class SiteScrollable extends StatelessWidget {
//   const SiteScrollable({super.key});

//   @override
//   Widget build(BuildContext context) {
//     return Container(
//   height: 180,
//   child: PageView(
//     children: [
//       Container(
//         margin: const EdgeInsets.symmetric(horizontal: 16),
//         child: ClipRRect(
//                 borderRadius: BorderRadius.circular(12),
//                 child: Image.asset(
//                   'assets/teeplant.jpg', // Hier den Pfad zu deinem Asset-Bild angeben
//                   width: 150,
//                   height: 150,
//                   fit: BoxFit.cover,
//                 ),
              
//         ),
//       ),
//       Container(
//         margin: const EdgeInsets.symmetric(horizontal: 16),
//         child: ClipRRect(
//                 borderRadius: BorderRadius.circular(12),
//                 child: Image.asset(
//                   'assets/teeplant.jpg', // Hier den Pfad zu deinem Asset-Bild angeben
//                   width: 150,
//                   height: 150,
//                   fit: BoxFit.cover,
//                 ),
//               ),
//       ),
//       Container(
//         margin: const EdgeInsets.symmetric(horizontal: 16),
//         child: ClipRRect(
//                 borderRadius: BorderRadius.circular(12),
//                 child: Image.asset(
//                   'assets/teeplant.jpg', // Hier den Pfad zu deinem Asset-Bild angeben
//                   width: 150,
//                   height: 150,
//                   fit: BoxFit.cover,
//                 ),
//               ),
//       ),
//     ],
//   ),
// );
//   }
// }

class SiteScrollable extends StatelessWidget {
  const SiteScrollable({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
  height: 180,
  child: ListView(
    scrollDirection: Axis.horizontal,
    children: [
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  'assets/teeplant.jpg', // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  'assets/teeplant3.jpg', // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  'assets/teenatur.jpg', // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
      Container(
        width: 280,
        margin: const EdgeInsets.only(right: 16),
        child: ClipRRect(
                borderRadius: BorderRadius.circular(12),
                child: Image.asset(
                  'assets/grüntee.jpg', // Hier den Pfad zu deinem Asset-Bild angeben
                  width: 150,
                  height: 150,
                  fit: BoxFit.cover,
                ),
              ),
      ),
    ],
  ),
);
  }
}