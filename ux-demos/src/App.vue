<template>
<div class="container max-w-screen-2xl mx-auto">
    <div class="p-10 grid grid-cols-2 gap-10">
        <!-- <div class="col-span-2">
            <PhoneLogin/>
        </div> 
        <div class="col-span-2 hidden">
            <DynamicForms />
        </div> -->
        <div class="text-6xl">Configuration</div>
        <div class="col-span-2">
            <TreeNode v-for="item in list" :node="item" :key="item.id" />
        </div>
    </div>
</div>
</template>

<script lang="ts">
import {
    defineComponent,
    ref,
    computed
} from 'vue';
import TreeNode from '@/components/TreeNode.vue';
// import DynamicForms from '@/components/DynamicForms.vue';
// import PhoneLogin from '@/components/PhoneLogin/PhoneLogin.vue';
// import JSONFile from '@/assets/g_d.json'

export default defineComponent({
    name: 'App',
    components: {
        TreeNode,
        // DynamicForms,
        // PhoneLogin
    },
    setup(props) {
        const data = [
            {
                id: 0,
                title: "Quality",
                select: false,
                level: 0,
                options: [{
                        id: 1,
                        title: "Fit",
                        select: false,
                        level: 1,
                        options: [{

                        }]
                    },
                    {
                        id: 1,
                        title: "UnFit",
                        select: false,
                        level: 1,
                        options: [{

                        }]
                    },
                    {
                        id: 1,
                        title: "ATM",
                        select: false,
                        level: 1,
                        options: [{

                        }]
                    }
                ]
            },
            {
                id: 0,
                title: "Orientation",
                select: false,
                level: 0,
                options: [
                {
                    id: 1,
                    title: "1",
                    select: false,
                    level: 1,
                    options: []
                    },
                    {
                    id: 1,
                    title: "2",
                    select: false,
                    level: 1,
                    options: []
                },{
                    id: 1,
                    title: "3",
                    select: false,
                    level: 1,
                    options: []
                    },
                    {
                    id: 1,
                    title: "4",
                    select: false,
                    level: 1,
                    options: []
                }
                ]
            }, {
                id: 0,
                title: "Currency",
                select: false,
                level: 0,
                options: [{
                id: 1,
                title: "INR",
                select: false,
                level: "1",
                options: [{
                        id: 1,
                        title: "10",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "20",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    }, {
                        id: 3,
                        title: "50",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: "USD",
                select: false,
                level: "1",
                options: [{
                        id: 1,
                        title: "10",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "20",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    }, {
                        id: 3,
                        title: "50",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    }
                ]
            }, {
                id: 3,
                title: "CAD",
                select: false,
                level: "1",
                options: [{
                        id: 1,
                        title: "10",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "20",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    }, {
                        id: 3,
                        title: "50",
                        select: false,
                        level: "2",
                        options: [{
                                id: 1,
                                title: "A",
                                select: false,
                                level: "3",
                                options: []
                            },
                            {
                                id: 2,
                                title: "B",
                                select: false,
                                level: "3",
                                options: []
                            }, {
                                id: 3,
                                title: "C",
                                select: false,
                                level: "3",
                                options: []
                            }
                        ]
                    }
                ]
            }
        ]
            }
        ]
        
        const list = ref(data)
        return {
            list
        }
    }
});
</script>

<style> 
</style>
