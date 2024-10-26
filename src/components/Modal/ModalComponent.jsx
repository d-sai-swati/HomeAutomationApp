// import React from 'react'
// import { Modal, Text, View } from 'react-native';

// const ModalComponent = () => {
//   const [modalOpen , setModalOpen] = React.useState(false);
//   return (
//     <Modal
//     visible={modalOpen}
//     transparent={true}
//     animationType="fade"
//     onRequestClose={setModalOpen}
// >
//     <View className="flex-1 justify-end items-end" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
//         <View className="w-64 ios:w-72 h-full bg-white p-5 shadow-lg ios:pt-14">
//          { content}
//         </View>
//     </View>
// </Modal>

//   )
// }

// export default ModalComponent;

import React from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';

const ModalComponent = ({ 
    visible, 
    onClose, 
    content, 
    animationType = "fade", 
    overlayColor = 'rgba(0, 0, 0, 0.5)',
    containerStyle = {},
    modalStyle = {},
}) => {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType={animationType}
            onRequestClose={onClose}
        >
            <View 
                style={[
                    { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: overlayColor },
                    containerStyle
                ]}
            >
                <View style={[{ width: '80%', backgroundColor: 'white', padding: 20, borderRadius: 8 }, modalStyle]}>
                    {content}
                    <TouchableOpacity onPress={onClose} style={{ marginTop: 10 }}>
                        <Text style={{ textAlign: 'right', color: 'blue' }}>Close</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ModalComponent;
