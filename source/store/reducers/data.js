
const defaultState = {
    soldiers: {
        gunners: {
            image_base_name: 'gunner',
            countries: {
                usa: true,
                germany: true
            },
            count_at_group: 3,
            groups: {
                a: true,
                b: true,
                c: true
            },
            actions: {
                move: 1,
                attack: 2,
                suppress: 4,
                control: false,
                scout: false,
                recon: false,
                conceal: false
            }
        },
        riflemen: {
            image_base_name: 'rifleman',
            countries: {
                usa: true,
                germany: true
            },
            count_at_group: 5,
            groups: {
                a: true,
                b: true,
                c: true
            },
            actions: {
                move: 1,
                attack: 1,
                control: true,
                scout: false,
                recon: false,
                conceal: false
            }
        },
        scouts: {
            image_base_name: 'ranger',
            countries: {
                usa: true,
                germany: true
            },
            count_at_group: 3,
            groups: {
                a: true,
                b: true,
                c: true
            },
            actions: {
                move: 2,
                attack: 1,
                control: false,
                scout: true,
                recon: true,
                conceal: true
            }
        },
    },
    fields: [
    
    ]
}

export default function data(state = defaultState, action) {
    switch (action.type) {
        
        default:
            return state;
    }
}