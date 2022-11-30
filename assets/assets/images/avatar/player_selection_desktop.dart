import 'package:flutter/material.dart';
class PlayerSelectionDesktop extends StatefulWidget {
  const PlayerSelectionDesktop({Key? key}) : super(key: key);

  @override
  State<PlayerSelectionDesktop> createState() => _PlayerSelectionDesktopState();
}

class _PlayerSelectionDesktopState extends State<PlayerSelectionDesktop> {
  int selectedCard = -1;

    List<String> avatarList = [
    'assets/images/avatar/avatar1.png',        
    'assets/images/avatar/avatar2.png',
    'assets/images/avatar/avatar3.png',
  ];

  List playerList = [
    'assets/images/player/player1.png',        
    'assets/images/player/player2.png',
    'assets/images/player/player3.png',
  ];


  @override
  Widget build(BuildContext context) {
    return Container(
       decoration: const BoxDecoration(
          image: DecorationImage(
            image: AssetImage('assets/images/background.png'),
            fit: BoxFit.cover,
          ),
        ),
      child: Scaffold(
        backgroundColor: Colors.transparent,
        appBar: AppBar(
          title: Text('D E S K T O P'),
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Row(
            children: [
              // First column
              Expanded(
                child: Column(
                  children: [  
                    Column(children: [
                      Stack(
                        children: [
                          Padding(
                            padding: const EdgeInsets.only(top: 32, left: 20),
                            child: Container(
                              height: MediaQuery.of(context).size.height * 0.8,
                              width: MediaQuery.of(context).size.width,
                              decoration: const BoxDecoration(
                                  image: DecorationImage(
                                    image: AssetImage('assets/images/imagem2.png'),
                                    fit: BoxFit.fill,
                                  ),
                              ),
                              child: Align(
                                alignment: Alignment.center,
                            child: Container(
                              width: MediaQuery.of(context).size.width * 0.4,
                              height: MediaQuery.of(context).size.width * 0.3,
                              decoration: BoxDecoration(
                                color: Colors.transparent,
                              ),
                                  child: Center(child: 
                                GridView.builder(
                                  gridDelegate: const SliverGridDelegateWithMaxCrossAxisExtent(
                                      maxCrossAxisExtent: 200,
                                      childAspectRatio: 3 / 2,
                                      crossAxisSpacing: 20,
                                      mainAxisSpacing: 20),
                                  itemCount: avatarList.length,
                                  itemBuilder: (BuildContext ctx, index) {
                                    return MouseRegion(
                                      cursor: SystemMouseCursors.click,
                                      child: GestureDetector(
                                              onTap: () {
                                            setState(() {
                                              // ontap of each card, set the defined int to the grid view index 
                                              selectedCard = index;
                                              print(selectedCard = index);
                                            });
                                          },
                                        child: Container(
                                          alignment: Alignment.center,
                                          decoration: BoxDecoration(
                                              color: Colors.red,
                                              borderRadius: BorderRadius.circular(15)),
                                          child: Image(image: AssetImage(avatarList[index])),
                                        ),
                                      ),
                                    );
                                  })))
                              ),
                            ),
                          ),
                          Positioned(
                            bottom: MediaQuery.of(context).padding.bottom / 1+20,
                            right: MediaQuery.of(context).padding.right / 1+10,
                            width: MediaQuery.of(context).size.width * 0.1,
                            height: MediaQuery.of(context).size.height * 0.2,
                            child: Container(
                              decoration: const BoxDecoration(
                                color: Colors.transparent,
                                  image: DecorationImage(
                                    image: AssetImage('assets/images/ic_avancar.png'),
                                    fit: BoxFit.fill,
                                  ),
                              ),
                            ),
                          ),
                          
                          // Expanded(
                          //   child: ListView.builder(
                          //     itemCount: 8,
                          //     itemBuilder: (context, index) {
                          //       return Padding(
                          //         padding: const EdgeInsets.all(8.0),
                          //         child: Container(
                          //           color: Colors.deepPurple[300],
                          //           height: 120,
                          //         ),
                          //       );
                          //     },
                          //   ),
                          // )
                        ],
                      )
                    ],)    
                  ],
                ),
              ),

              // second column
              Padding(
                padding: const EdgeInsets.only(left: 20, right: 20),
                child: Container(
                  width: MediaQuery.of(context).size.width * 0.13 ,
                  height: MediaQuery.of(context).size.height * 0.86,
                  color: Colors.red,
                  child: ListView.builder(
                    itemCount: 8,
                    itemBuilder: (context, index) {
                      return Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Container(
                          color: Colors.blue,
                          width: 100,
                          height: 120,
                        ),
                      );
                    },
                  )
                ),
              )
            ],
          ),
        ),
      ),
    );
  }
}
